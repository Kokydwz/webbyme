// بيانات المستخدمين (بما في ذلك 4 مستخدمين آخرين)
const users = [
    { username: "koky", code: "12345" },
    { username: "ahmed", code: "54321" },
    { username: "sara", code: "67890" },
    { username: "mohamed", code: "09876" },
    { username: "noha", code: "11223" },
    { username: "ali", code: "12345" },   // المستخدم الجديد
    { username: "404", code: "12345" },    // المستخدم الجديد
    { username: "hisham", code: "2025" }   // إضافة المستخدم هشام
];

// دالة لتسجيل الدخول
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // منع إرسال النموذج بشكل افتراضي

    const username = document.getElementById("username").value;
    const code = document.getElementById("code").value;

    const errorMessage = document.getElementById("error-message");
    const successMessage = document.createElement("div");

    // التحقق من وجود المستخدم في قائمة المستخدمين
    const user = users.find(u => u.username === username && u.code === code);

    if (user) {
        // حفظ اسم المستخدم في localStorage
        localStorage.setItem("username", username);

        // عرض رسالة النجاح
        successMessage.className = "success-message";
        successMessage.innerHTML = "تم التسجيل بنجاح!";
        document.querySelector(".login-container").appendChild(successMessage);

        // التوجيه إلى صفحة hisham.html إذا كان الاسم والكود "hisham" و"2025"
        if (username === "hisham" && code === "2025") {
            setTimeout(() => {
                window.location.href = "indexhisham.html";  // الانتقال إلى صفحة hisham.html بعد 2 ثانية
            }, 2000);
        } else {
            // التوجيه إلى صفحة code.html بعد 2 ثانية
            setTimeout(() => {
                window.location.href = "code.html";  // الانتقال إلى صفحة code.html بعد 2 ثانية
            }, 2000);
        }

        // إزالة الرسالة بعد 3 ثوانٍ
        setTimeout(() => successMessage.remove(), 3000);
    } else {
        // عرض رسالة الفشل
        errorMessage.className = "failure-message";
        errorMessage.innerHTML = "فشل التسجيل. راسل kokywz Telegram.";
    }
});
