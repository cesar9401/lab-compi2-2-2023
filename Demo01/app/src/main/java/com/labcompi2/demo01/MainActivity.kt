package com.labcompi2.demo01

import android.app.Activity
import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.labcompi2.demo01.layouts.LinearActivity
import com.labcompi2.demo01.layouts.RelativeActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val linearButton: Button = findViewById(R.id.btnLinear)
        val relativeButton: Button = findViewById(R.id.btnRelative)

        linearButton.setOnClickListener {
            goToActivity(this, LinearActivity())
        }

        relativeButton.setOnClickListener {
            goToActivity(this, RelativeActivity())
        }
    }

    private fun goToActivity(context: Context, activity: Activity) {
        val intent = Intent(context, activity::class.java)
        startActivity(intent)
    }
}
