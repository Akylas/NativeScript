package com.tns;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class NativeScriptActivity extends AppCompatActivity {
    public interface Interface {

        boolean beforeOnCreate(@Nullable Bundle savedInstanceState);
        void afterOnCreate(@Nullable Bundle savedInstanceState);

        void onNewIntent(Intent intent);

        void onSaveInstanceState(@NonNull Bundle outState);

        void onStart();

        void onStop();

        void onDestroy();

        void onPostResume();

        boolean onBackPressed();

        void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults);

        void onActivityResult(int requestCode, int resultCode, @Nullable Intent data);
    }

    public NativeScriptActivity.Interface inter;

    public NativeScriptActivity() {
        super();
    }

    public NativeScriptActivity(NativeScriptActivity.Interface inter) {
        super();
        this.setInterface(inter);
    }

    public void setInterface(NativeScriptActivity.Interface inter) {
        this.inter = inter;
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        boolean isRestart = false;
        if (this.inter != null) {
            isRestart = this.inter.beforeOnCreate(savedInstanceState);
        }
        super.onCreate(isRestart ? savedInstanceState : null);
        if (this.inter != null) {
            this.inter.afterOnCreate(savedInstanceState);
        }
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        if (this.inter != null) {
            this.inter.onNewIntent(intent);
        }
    }

    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        super.onSaveInstanceState(outState);
        if (this.inter != null) {
            this.inter.onSaveInstanceState(outState);
        }
    }

    @Override
    protected void onStart() {
        super.onStart();
        if (this.inter != null) {
            this.inter.onStart();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (this.inter != null) {
            this.inter.onStop();
        }
    }

    @Override
    protected void onDestroy() {
        if (this.inter != null) {
            this.inter.onDestroy();
        }
        super.onDestroy();
    }

    @Override
    protected void onPostResume() {
        super.onPostResume();
        if (this.inter != null) {
            this.inter.onPostResume();
        }
    }

    @Override
    public void onBackPressed() {
        boolean shouldCallSuper = true;
        if (this.inter != null) {
            shouldCallSuper = this.inter.onBackPressed();
        }
        if (shouldCallSuper) {
            super.onBackPressed();
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        if (this.inter != null) {
            this.inter.onRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (this.inter != null) {
            this.inter.onActivityResult(requestCode, resultCode, data);
        }
    }
}
