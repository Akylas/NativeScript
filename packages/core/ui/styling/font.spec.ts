import { Font } from './font';

describe('Font', () => {
	describe('cloneOrDirty', () => {
		// simulate the android cached typeface set by Font.getAndroidTypeface()
		const fontWithCachedTypeface = () => {
			const font = new Font('serif', 12, 'normal', 'normal');
			font['_typeface'] = { cached: true };
			return font;
		};

		it('clones do not carry the cached typeface', () => {
			const font = fontWithCachedTypeface();
			const clones = [font.withFontWeight('700'), font.withFontFamily('monospace'), font.withFontStyle('italic'), font.withFontSize(20), font.withFontScale(2), font.withFontVariationSettings([{ axis: 'wght', value: 700 }])];
			for (const clone of clones) {
				expect(clone).not.toBe(font);
				expect(clone['_typeface']).toBeNull();
			}
			// source font keeps its own cache
			expect(font['_typeface']).toEqual({ cached: true });
		});

		it('clones keep the font descriptor and apply the new property', () => {
			const clone = fontWithCachedTypeface().withFontWeight('700');
			expect(clone.fontFamily).toBe('serif');
			expect(clone.fontSize).toBe(12);
			expect(clone.fontStyle).toBe('normal');
			expect(clone.fontWeight).toBe('700');
		});

		it('dirtied (non cloned) font clears the cached typeface', () => {
			const font = fontWithCachedTypeface();
			const result = font.withFontWeight('700', false);
			expect(result).toBe(font);
			expect(result.isDirty).toBe(true);
			expect(result['_typeface']).toBeNull();
		});
	});
});
