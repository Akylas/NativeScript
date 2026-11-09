# Fork divergences from upstream NativeScript

This fork (`Akylas/NativeScript`) tracks `NativeScript/NativeScript` (`upstream`) but deliberately differs in
several places. This file lists where, why, and **what to do with each area during a merge**, so conflicts can
be resolved by policy instead of re-investigation.

Status: first version, written right after the 2026-11 merge (base `aa92b47d2` → `upstream/main` `07e84ec58`).
Entries marked _(not analysed)_ are known to be heavily fork-modified but have not been studied in detail; fill
them in the next time you touch them.

## Merge policy in one paragraph

Take upstream's fixes and features, **except** where this file says the area is removed/replaced. In
heavily-diverged files (see "Port, don't merge" below) start from the fork's version and port upstream's
changes by hand, using `git diff <base> upstream/main -- <file>` as the reading list. Never let an auto-merge
bring back removed code: after every merge grep for the identifiers in "Removed features" (below).

### Useful commands

```bash
git fetch upstream
git merge-base main upstream/main                       # last common point (update "Status" above after a merge)
git merge-tree --write-tree --name-only main upstream/main | tail -n +2   # dry-run: conflicting files
git log --oneline main..upstream/main -G'EdgeToEdge|OverflowEdge'        # upstream commits touching a removed feature
git diff <base> upstream/main -- <file>                 # what upstream changed
git diff <base> main -- <file>                          # what the fork changed
git checkout --conflict=diff3 -- <file>                 # show base in conflict markers (very helpful)
npx tsc --noEmit -p packages/core/tsconfig.lib.json     # must stay at 0 errors (plain tsconfig.json checks nothing)
```

Do the merge on a branch in a separate worktree (`git worktree add -b merge/upstream-YYYY-MM ../NativeScript-merge main`).

## Removed features (never re-import)

### Android edge-to-edge
Upstream's Android edge-to-edge implementation (`feat(android): edge to edge #10774` and every later fix
building on it) is **removed**; reverted in `6f62fbc5b` and kept out in later merges.

* Identifiers to grep for after a merge: `EdgeToEdge`, `edgeToEdge`, `OverflowEdge`, `overflowEdge`,
  `androidOverflowEdge`, `AndroidOverflow`, `getEdgeInsets`, `setInsetListener`, `refreshEdgeToEdge`,
  `ignoreEdgeToEdgeOnOlderDevices`, `setStatusBarColor`/`setNavigationBarColor`/`setDarkModeHandler`
  (the `native-helper` ones), `overflow-edges.android.ts`, `edge-to-edge.android.spec.ts`.
* Files where it lives upstream: `utils/native-helper-for-android.ts`, `utils/native-helper.android.ts`,
  `utils/native-helper.d.ts`, `core-types/index.ts` (`AndroidOverflow*` types), `ui/core/view/index.android.ts`
  (insets, night mode, dialog `onConfigurationChanged`), `application/application.android.ts`
  (`edgeToEdgeAppearance`, `setSystemAppearance` override), `ui/frame/index.android.ts`,
  `LayoutBase.java` (insets/overflow edge, `applyingEdges`, `BufferOffset`), `Utils.java` (`enableEdgeToEdge`),
  `types-android/.../org.nativescript.widgets.d.ts`, toolbox `pages/ete/*`.
* Gotcha: git **auto-merges** upstream edge code into regions outside the conflict hunks (this happened in
  `view/index.android.ts`). Always grep, don't trust the conflict list.
* Upstream commits that look unrelated but touch it: `26f5032e0` (appearance APIs), `e555c9db4`,
  `9f2e07216`. Port only the non-edge parts.
* Leftovers in the fork that are harmless but stale: toolbox `ete.ts`, `list-page-sticky*.xml`
  (`androidOverflowEdge="…"` attribute, ignored), `ui-mobile-base/android/widgetdemo/.../MainActivity.kt`
  (references `LayoutBase.OverflowEdge*` constants that no longer exist; the demo module is not built).

### Prebuilt native artifacts are not committed
Widgets are **packaged as source** and compiled by the consuming app; only a pre-release build check is done.

* Deleted in the fork, keep deleted when upstream modifies them: `packages/core/platforms/android/widgets-release.aar`,
  `packages/core/platforms/ios/TNSWidgets.xcframework/**`,
  `packages/ui-mobile-base/project.json`, `nx.json`, `package-lock.json`
  (fork uses `yarn.lock`), `.github/workflows/npm_release_tns_core.yml` (fork has `npm_release_core.yml`).
* Merge status shows these as `DU` (deleted by us): resolve with `git rm`, then make sure the untracked
  upstream copy is removed from the working tree too.
* Consequence: upstream's Java/Swift changes still matter (they are compiled from source), only the binaries don't.

### yarn, not npm/nx, in CI
The fork has no `nx` dependency and no `nx.json`, and installs with **yarn** (`packageManager: yarn@4.3.1`;
`corepack enable` then `yarn install --immutable`). npm-only `overrides` are dead config under yarn.

* Deleted workflows, keep deleted when upstream touches them: `native_artifacts_check.yml` (`nx verify-native`),
  `preview-release.yml` (`nx run-many` + pkg.pr.new). `secure_nx_release.yml` is upstream's nx release flow and
  is unused; the fork releases with `npm_release_core.yml`.
* `apps_automated_{android,ios}.yml` are adapted: yarn install, `yarn core:build`, then
  `node tools/scripts/run-automated.js <platform>` instead of `npx nx test apps-automated`. Re-apply that after
  each merge that modifies them, and drop any `nrwl/nx-set-shas` / `NX_CLOUD_*` lines upstream re-adds.
* `dist/packages/core` is a yarn workspace but `dist` is not committed. On a clean checkout copy
  `packages/core/package.json` to `dist/packages/core/package.json` **before** `yarn install --immutable`, or yarn
  resolves `@akylas/nativescript` from npm and the immutable check fails (`YN0028`).
* Do not re-add upstream's `"vite": "^8.0.0"` entry to `overrides`; it conflicts with the pinned devDependency
  under npm (`EOVERRIDE`).

### Apps use napi runtimes via `runtimePackageName`
The fork's CLI (`nativescript-cli`) resolves the platform runtime from `nativescript.config.ts`
`android.runtimePackageName` / `ios.runtimePackageName` (upstream only added the type, `8f7d55c08`).
`apps/toolbox`, `apps/automated` and `apps/ui` use `@nativescript/android-quickjs-ng` (pinned, currently
`9.0.0-alpha.5`, the npm `alpha` tag) for Android; iOS still uses the default `@nativescript/ios`.

* Do **not** put a `"*"` range on `@nativescript/android` in an app: `@nativescript/doctor`'s Android check
  reads that dependency by name, `semver.coerce('*')` is `null`, and `ns run android` dies with
  `Invalid version. Must be a string. Got type "object"`. Pin a real version, and when using a custom runtime
  package, don't also list `@nativescript/android`.
* The npm `latest` tag of the napi packages (`@nativescript/android-quickjs-ng`, `-v8`, `ios-*`) is a `0.0.1`
  placeholder, so unpinned `*` resolves to the wrong thing; always pin or use the `alpha`/`preview` tag.
* The apps still carry `android.v8Flags: '--expose_gc'`, a V8 setting that QuickJS-ng presumably ignores.

## Architecture differences

### Root view = ContentView host + `subRootView` (Android and iOS)
The fork wraps the user's root view: the activity/window root is a `ContentView` and the user's view is its
content (`subRootView`). Helpers: `application/helpers-common.ts` `getSubRootView/setSubRootView`,
`setRootView/getRootView`. Origin commits: `5161bb38f`, `ff850701a`, `9a427324d`, `459ee4f8f`, `b4bf472e3`,
`a58e8a5e3`, `c592290f0`.

Upstream's `NativeWindow` (cross-platform, scenes/multi-window, `e5ea71e86`, merged 2026-11) assumes the
window root **is** the user's view. The 2026-11 merge reconciled them as follows; keep this invariant when
merging further NativeWindow changes:

* Android: `ui/frame/index.android.ts` `setActivityContent(…, view?)` builds the ContentView and uses
  `view ?? this._subRootView` as sub root; the window adopts the ContentView; `isPrimaryOrUnknownWindow(activity)`
  guards the global `setRootView/setSubRootView` writes so a secondary window can't clobber the primary.
* iOS: `application.ios.ts` tracks hosts in `_contentHosts` (WeakSet); `getRootView()` returns the host's
  `content`; `_resolveWindowContent` is overridden for the primary window to wrap with `install:false`;
  `setHostedWindowContent`/`attachUserRootView` attach the user view.
* Known gaps (`TODO(merge)` in code): secondary windows are not hosted in a ContentView on iOS;
  `window.rootView` is the host, not the user's view (so `View.getNativeWindow()` walks up to the host);
  content set via `Application.primaryWindow.setContent(view)` is not hosted on iOS; a11y/font-scale root
  classes may not reach secondary windows.
* Not yet tested on device after the merge.

### Application / events (`application/*`)
Fork-specific, keep on merge:

* Android events `fragmentCreate`, `activityCreate`, `dialogOnCreateView`, `configurationChange`
  (typed via `Interfaces.*` overloads in `application.d.ts`'s `AndroidApplicationOn`). Existing fork bug:
  `dialogOnCreateViewEvent` / `configurationChangeEvent` are initialised to `activityRequestPermissionsEvent`.
* `SET_THEME_ON_LAUNCH` read from `ApplicationSettings` first, then manifest meta-data.
* `activitiesCount ?? 0`, `setForegroundActivity` in `onCreate`, `setApplicationPropertiesCallback`,
  `fontScaleChanged` from `accessibility/font-scale.android`.
* `AndroidApplication` does not `implements IAndroidApplication`; `on` is typed with
  `declare on: IAndroidApplication['on']`.
* `systemAppearanceChanged` event is **cancellable** (`args.cancel`); upstream's `autoSystemAppearanceChanged`
  flag is combined with it.
* `increaseStyleScopeApplicationCssSelectorVersion` is `public`.
* `orientationChange` event carries rotation `degrees` (`getOrientationValue` returns `[value, degrees]` on iOS).
  Risk: on Android, reading `primaryWindow.orientation()` may fire the window event first, losing `degrees`.
* `initRootView(rootView, window?)` keeps the fork's `rootView._onCssStateChange(true)` and does **not** call
  upstream's `readyInitAccessibilityCssHelper`/`readyInitFontScale`/`applyAccessibilityCssToRoot`.

### Accessibility refactor (`accessibility/*`)
The fork split accessibility into `accessibility-types.ts`, `accessibility-css-helper.ts`
(`initAccessibilityCssHelper`), `accessibility-service-*.ts`, `font-scale-*.ts` and platform `index.*.ts`
(`~17` fork commits). Upstream's `accessibility-common.ts` keeps font-scale/a11y-class state, which the fork removed.
Merge rule: keep the fork's file layout; port upstream behaviour fixes into the new files; any upstream import of
`readyInit*`, `applyAccessibilityCssToRoot`, `getCurrentA11YServiceClass`, or `AndroidAccessibilityEvent` from
`accessibility-common` must be redirected (the type lives in `accessibility-types`).

## Port, don't merge (heavily rewritten in the fork)

Start from the fork's file; port upstream's diff by hand. Expect a conflict every merge.

* `ui/core/properties/index.ts` (~28 fork commits): property system restructured. Fork features that must
  survive: property defaults may be functions (`defaultValue` can be `T | ((property, view) => T)` — hence the
  `as CoreTypes.LengthType` casts in flexbox gaps), `__ONLY_ALLOW_ROOT_VARIABLES__` branch in `var()` handling,
  requestLayout only when the value really changed / `requestLayoutIfNeeded`.
* `ui/styling/style-properties.ts`: fork wrappers `colorConverter`, `backgroundInternalSubPropertyValueChanged`,
  `fontInternalSubPropertyValueChanged`, its `VerticalAlignment`, `statusBarStyleProperty` export (in
  `page-common.ts`). New upstream props must be wired through the wrappers (e.g. `cornerShape` goes through
  `withCornerShape(v, false)`). Use `__APPLE__` rather than `global.isIOS` for `affectsLayout`.
* `ui/styling/length-shared.ts`: Length helpers live here (not duplicated in `style-properties.ts`).
* `ui/styling/style-scope.ts`: lazy `await import()` of CSS parsers (`parseCSSAst` is `async`, called unawaited);
  `onChange(force)`; reverse-iteration `applyInlineStyle`.
* `color/color-utils.ts`: css-tools are optional: `calc()`/`color-mix()` require `__CSS_USE_CSS_TOOLS__` and
  `@csstools/*` are `require`d lazily. Keep that pattern when porting new color functions.
* `globals/index.ts`: polyfill installation sits inside the fork's `autoLoadPolyfills` guard.
* `ui/core/view-base/index.ts`, `data/observable/index.ts` (global static notify is commented out in the fork).
* `application/application.android.ts`, `application.ios.ts`, `ui/frame/index.android.ts`,
  `ui/core/view/index.android.ts`: see Architecture above.
* `ui/core/view/index.ios.ts`: fork's `mSuspendRequestLayout`/`_requetLayoutNeeded` check runs before upstream's
  per-turn `requestedThisTurn` skip in `requestLayout`.
* `ui/transition/shared-transition.ts`: fork's `sharedElementTo/From` listeners and `toPage/fromPage` null guards;
  upstream's `presentedTags`/`externalRoots` layered on top.

## Fork-heavy areas _(not analysed in detail)_

Large diff against upstream with many fork commits; treat the fork as source of truth and cherry-pick upstream
fixes. Record specifics here when you next work in them.

* `ui/animation/*` (iOS/Android/common/keyframe, ~34 fork commits; e.g. `spring` curve not assigned as timing function).
* `file-system/*` + `FolderHelper.java` (SAF / `content://` support, `isFolder`, SAF-aware `path.join`).
* `ui/frame/fragment.transitions.android.ts`, `frame-helper-for-android.ts`, `CustomTransition.java`
  (many transition fixes; fork also carries a CustomTransition animator-leak fix).
* `ui/layouts/grid-layout/*` and `CommonLayoutParams` (simplified GridLayout without `valueChanged`, fewer JNI calls).
* `ui-mobile-base/android/widgets/**`: `BorderDrawable.java`, `ViewHelper.java`, `Utils.java`, `build.gradle`.
* `ui/text-base/*`, `ui/page/index.ios.ts`, `ui/gestures/gestures-types.ts`.
* iOS: `platforms/ios/src/NSApplicationSettings.swift` (`getAllJSON` uses a native method), non-uniform border
  clearing, box-shadow double alpha fix, `iosOverflowSafeArea` handling (iOS safe-area features are **kept**; only
  the Android edge-to-edge implementation is removed).
* Tooling: root `package.json`, `yarn.lock`, `.github/workflows/*`, webpack5 snapshots (resolved favouring the
  fork in 2026-11 and **not regenerated** — run `jest -u` in `packages/webpack5` once its deps are installed).

## Checklist for the next merge

1. `git fetch upstream`; dry-run with `git merge-tree`; merge in a worktree on a new branch.
2. Resolve `DU` files by deleting (see "Prebuilt native artifacts"), then delete the untracked upstream copies.
3. Resolve package/version files favouring the fork, keeping upstream's non-conflicting hunks.
4. Port-don't-merge files: read upstream's diff, apply onto the fork's version.
5. Grep for removed-feature identifiers; `tsc` must be clean on `packages/core/tsconfig.lib.json`.
6. Check `TODO(merge)` markers (`git grep -n 'TODO(merge)'`) and the "Known gaps" above; update this file.
7. Run on device: Android + iOS, including a modal, a nested frame, a shared-element transition, and (if
   NativeWindow changed) a second window.
