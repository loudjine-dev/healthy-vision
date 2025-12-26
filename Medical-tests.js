<<<<<<< HEAD
/* قاعدة بيانات التحاليل الطبية
   كل تحليل عبارة عن دالة تستقبل القيمة وترجع النتيجة النصية
*/
const tests = {
  "HBA1C": value => value < 5.7 ? "طبيعي" : value <= 6.4 ? "ما قبل السكري" : "سكري",
  "GLUCOSE": value => value < 70 ? "انخفاض سكر" : value <= 100 ? "طبيعي" : "ارتفاع سكر",
  "CHOLESTEROL": value => value < 200 ? "طبيعي" : value <= 239 ? "حدي" : "مرتفع",
  "HDL": value => value < 40 ? "منخفض" : value <= 60 ? "طبيعي" : "مرتفع",
  "LDL": value => value < 100 ? "مثالي" : value <= 160 ? "حدي" : "مرتفع",
  "TRIGLYCERIDES": value => value < 150 ? "طبيعي" : value <= 199 ? "حدي" : "مرتفع",
  "UREA": value => value < 20 ? "منخفض" : value <= 40 ? "طبيعي" : "مرتفع",
  "CREATININE": value => value < 0.6 ? "منخفض" : value <= 1.2 ? "طبيعي" : "مرتفع",
  "URIC ACID": value => value < 3.5 ? "منخفض" : value <= 7.2 ? "طبيعي" : "مرتفع",
  "SGPT": value => value <= 40 ? "طبيعي" : "مرتفع (قد يشير لمشكلة بالكبد)",
  "SGOT": value => value <= 40 ? "طبيعي" : "مرتفع (قد يشير لمشكلة بالكبد)",
  "BILIRUBIN": value => value <= 1.2 ? "طبيعي" : "مرتفع (احتمال مشاكل بالكبد)",
  "HEMOGLOBIN": value => value < 12 ? "منخفض (فقر دم)" : value <= 16 ? "طبيعي" : "مرتفع",
  "WBC": value => value < 4000 ? "منخفض" : value <= 11000 ? "طبيعي" : "مرتفع (عدوى محتملة)",
  "PLATELETS": value => value < 150000 ? "منخفض" : value <= 450000 ? "طبيعي" : "مرتفع",
  "RBC": value => value < 4 ? "منخفض" : value <= 6 ? "طبيعي" : "مرتفع",
  "VITAMIN D": value => value < 20 ? "نقص شديد" : value <= 30 ? "نقص طفيف" : "طبيعي",
  "CALCIUM": value => value < 8.5 ? "منخفض" : value <= 10.5 ? "طبيعي" : "مرتفع",
  "POTASSIUM": value => value < 3.5 ? "منخفض" : value <= 5.1 ? "طبيعي" : "مرتفع",
  "SODIUM": value => value < 135 ? "منخفض" : value <= 145 ? "طبيعي" : "مرتفع",
  "MAGNESIUM": value => value < 1.7 ? "منخفض" : value <= 2.2 ? "طبيعي" : "مرتفع",
  "TSH": value => value < 0.4 ? "خمول الغدة" : value <= 4 ? "طبيعي" : "فرط نشاط الغدة",
  "T3": value => value < 80 ? "منخفض" : value <= 200 ? "طبيعي" : "مرتفع",
  "T4": value => value < 5 ? "منخفض" : value <= 12 ? "طبيعي" : "مرتفع",
  "ESR": value => value <= 20 ? "طبيعي" : "مرتفع (التهاب محتمل)",
  "CRP": value => value <= 6 ? "طبيعي" : "مرتفع (التهاب/عدوى)",
  "FERRITIN": value => value < 30 ? "منخفض (نقص مخزون الحديد)" : value <= 400 ? "طبيعي" : "مرتفع",
  "IRON": value => value < 50 ? "منخفض" : value <= 170 ? "طبيعي" : "مرتفع",
  "ALBUMIN": value => value < 3.5 ? "منخفض" : value <= 5 ? "طبيعي" : "مرتفع",
  "CK": value => value <= 200 ? "طبيعي" : "مرتفع (مشكلة بالعضلات/القلب)",
  "LDH": value => value <= 250 ? "طبيعي" : "مرتفع (تلف بالأنسجة)",
  "GGT": value => value <= 60 ? "طبيعي" : "مرتفع (قد يشير لمشكلة بالكبد)",
  "INSULIN": value => value < 2 ? "منخفض" : value <= 25 ? "طبيعي" : "مرتفع (مقاومة إنسولين محتملة)",
  "CORTISOL": value => value < 5 ? "منخفض" : value <= 25 ? "طبيعي" : "مرتفع (إجهاد/مشكلة بالغدة)",
  "PROLACTIN": value => value < 5 ? "منخفض" : value <= 25 ? "طبيعي" : "مرتفع",
  "TESTOSTERONE": value => value < 300 ? "منخفض" : value <= 1000 ? "طبيعي" : "مرتفع",
  "ESTRADIOL": value => value < 20 ? "منخفض" : value <= 350 ? "طبيعي" : "مرتفع",
  "FOLIC ACID": value => value < 3 ? "منخفض" : value <= 20 ? "طبيعي" : "مرتفع",
  "VITAMIN B12": value => value < 200 ? "نقص" : value <= 900 ? "طبيعي" : "مرتفع",
  "HBA": value => value < 12 ? "منخفض" : value <= 16 ? "طبيعي" : "مرتفع",
  "INR": value => value < 0.9 ? "منخفض" : value <= 1.2 ? "طبيعي" : "مرتفع",
  "PT": value => value <= 13 ? "طبيعي" : "طويل (اضطراب تخثر)",
  "PTT": value => value <= 35 ? "طبيعي" : "طويل (اضطراب تخثر)",
  "D-DIMER": value => value <= 500 ? "طبيعي" : "مرتفع (جلطات محتملة)",
  "HBA2": value => value <= 3.5 ? "طبيعي" : "مرتفع (ثلاسيميا محتملة)",
  "RETIC": value => value <= 2 ? "طبيعي" : "مرتفع (زيادة تكوين الدم)",
  "PH": value => value < 7.35 ? "حامضي" : value <= 7.45 ? "طبيعي" : "قلوي",
  "PCO2": value => value < 35 ? "منخفض" : value <= 45 ? "طبيعي" : "مرتفع",
  "HCO3": value => value < 22 ? "منخفض" : value <= 28 ? "طبيعي" : "مرتفع"
};

/* التعامل مع الفورم */
document.getElementById("test-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const testName = document.getElementById("test-name").value.trim().toUpperCase();
  const testValue = parseFloat(document.getElementById("test-value").value);
  const resultBox = document.getElementById("result");

  if (tests[testName]) {
    resultBox.innerText = `${testName} (${testValue}): ${tests[testName](testValue)}`;
    resultBox.style.display = "block";
  } else {
    resultBox.innerText = "هذا التحليل غير موجود في قاعدة البيانات.";
    resultBox.style.display = "block";
  }
});

/* زر عرض جميع التحاليل */
document.getElementById("show-all").addEventListener("click", function () {
  const list = document.getElementById("all-tests");
  list.innerHTML = "";
  Object.keys(tests).forEach(test => {
    const li = document.createElement("li");
    li.textContent = test;
    list.appendChild(li);
  });
});
=======
/* قاعدة بيانات التحاليل الطبية
   كل تحليل عبارة عن دالة تستقبل القيمة وترجع النتيجة النصية
*/
const tests = {
  "HBA1C": value => value < 5.7 ? "طبيعي" : value <= 6.4 ? "ما قبل السكري" : "سكري",
  "GLUCOSE": value => value < 70 ? "انخفاض سكر" : value <= 100 ? "طبيعي" : "ارتفاع سكر",
  "CHOLESTEROL": value => value < 200 ? "طبيعي" : value <= 239 ? "حدي" : "مرتفع",
  "HDL": value => value < 40 ? "منخفض" : value <= 60 ? "طبيعي" : "مرتفع",
  "LDL": value => value < 100 ? "مثالي" : value <= 160 ? "حدي" : "مرتفع",
  "TRIGLYCERIDES": value => value < 150 ? "طبيعي" : value <= 199 ? "حدي" : "مرتفع",
  "UREA": value => value < 20 ? "منخفض" : value <= 40 ? "طبيعي" : "مرتفع",
  "CREATININE": value => value < 0.6 ? "منخفض" : value <= 1.2 ? "طبيعي" : "مرتفع",
  "URIC ACID": value => value < 3.5 ? "منخفض" : value <= 7.2 ? "طبيعي" : "مرتفع",
  "SGPT": value => value <= 40 ? "طبيعي" : "مرتفع (قد يشير لمشكلة بالكبد)",
  "SGOT": value => value <= 40 ? "طبيعي" : "مرتفع (قد يشير لمشكلة بالكبد)",
  "BILIRUBIN": value => value <= 1.2 ? "طبيعي" : "مرتفع (احتمال مشاكل بالكبد)",
  "HEMOGLOBIN": value => value < 12 ? "منخفض (فقر دم)" : value <= 16 ? "طبيعي" : "مرتفع",
  "WBC": value => value < 4000 ? "منخفض" : value <= 11000 ? "طبيعي" : "مرتفع (عدوى محتملة)",
  "PLATELETS": value => value < 150000 ? "منخفض" : value <= 450000 ? "طبيعي" : "مرتفع",
  "RBC": value => value < 4 ? "منخفض" : value <= 6 ? "طبيعي" : "مرتفع",
  "VITAMIN D": value => value < 20 ? "نقص شديد" : value <= 30 ? "نقص طفيف" : "طبيعي",
  "CALCIUM": value => value < 8.5 ? "منخفض" : value <= 10.5 ? "طبيعي" : "مرتفع",
  "POTASSIUM": value => value < 3.5 ? "منخفض" : value <= 5.1 ? "طبيعي" : "مرتفع",
  "SODIUM": value => value < 135 ? "منخفض" : value <= 145 ? "طبيعي" : "مرتفع",
  "MAGNESIUM": value => value < 1.7 ? "منخفض" : value <= 2.2 ? "طبيعي" : "مرتفع",
  "TSH": value => value < 0.4 ? "خمول الغدة" : value <= 4 ? "طبيعي" : "فرط نشاط الغدة",
  "T3": value => value < 80 ? "منخفض" : value <= 200 ? "طبيعي" : "مرتفع",
  "T4": value => value < 5 ? "منخفض" : value <= 12 ? "طبيعي" : "مرتفع",
  "ESR": value => value <= 20 ? "طبيعي" : "مرتفع (التهاب محتمل)",
  "CRP": value => value <= 6 ? "طبيعي" : "مرتفع (التهاب/عدوى)",
  "FERRITIN": value => value < 30 ? "منخفض (نقص مخزون الحديد)" : value <= 400 ? "طبيعي" : "مرتفع",
  "IRON": value => value < 50 ? "منخفض" : value <= 170 ? "طبيعي" : "مرتفع",
  "ALBUMIN": value => value < 3.5 ? "منخفض" : value <= 5 ? "طبيعي" : "مرتفع",
  "CK": value => value <= 200 ? "طبيعي" : "مرتفع (مشكلة بالعضلات/القلب)",
  "LDH": value => value <= 250 ? "طبيعي" : "مرتفع (تلف بالأنسجة)",
  "GGT": value => value <= 60 ? "طبيعي" : "مرتفع (قد يشير لمشكلة بالكبد)",
  "INSULIN": value => value < 2 ? "منخفض" : value <= 25 ? "طبيعي" : "مرتفع (مقاومة إنسولين محتملة)",
  "CORTISOL": value => value < 5 ? "منخفض" : value <= 25 ? "طبيعي" : "مرتفع (إجهاد/مشكلة بالغدة)",
  "PROLACTIN": value => value < 5 ? "منخفض" : value <= 25 ? "طبيعي" : "مرتفع",
  "TESTOSTERONE": value => value < 300 ? "منخفض" : value <= 1000 ? "طبيعي" : "مرتفع",
  "ESTRADIOL": value => value < 20 ? "منخفض" : value <= 350 ? "طبيعي" : "مرتفع",
  "FOLIC ACID": value => value < 3 ? "منخفض" : value <= 20 ? "طبيعي" : "مرتفع",
  "VITAMIN B12": value => value < 200 ? "نقص" : value <= 900 ? "طبيعي" : "مرتفع",
  "HBA": value => value < 12 ? "منخفض" : value <= 16 ? "طبيعي" : "مرتفع",
  "INR": value => value < 0.9 ? "منخفض" : value <= 1.2 ? "طبيعي" : "مرتفع",
  "PT": value => value <= 13 ? "طبيعي" : "طويل (اضطراب تخثر)",
  "PTT": value => value <= 35 ? "طبيعي" : "طويل (اضطراب تخثر)",
  "D-DIMER": value => value <= 500 ? "طبيعي" : "مرتفع (جلطات محتملة)",
  "HBA2": value => value <= 3.5 ? "طبيعي" : "مرتفع (ثلاسيميا محتملة)",
  "RETIC": value => value <= 2 ? "طبيعي" : "مرتفع (زيادة تكوين الدم)",
  "PH": value => value < 7.35 ? "حامضي" : value <= 7.45 ? "طبيعي" : "قلوي",
  "PCO2": value => value < 35 ? "منخفض" : value <= 45 ? "طبيعي" : "مرتفع",
  "HCO3": value => value < 22 ? "منخفض" : value <= 28 ? "طبيعي" : "مرتفع"
};

/* التعامل مع الفورم */
document.getElementById("test-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const testName = document.getElementById("test-name").value.trim().toUpperCase();
  const testValue = parseFloat(document.getElementById("test-value").value);
  const resultBox = document.getElementById("result");

  if (tests[testName]) {
    resultBox.innerText = `${testName} (${testValue}): ${tests[testName](testValue)}`;
    resultBox.style.display = "block";
  } else {
    resultBox.innerText = "هذا التحليل غير موجود في قاعدة البيانات.";
    resultBox.style.display = "block";
  }
});

/* زر عرض جميع التحاليل */
document.getElementById("show-all").addEventListener("click", function () {
  const list = document.getElementById("all-tests");
  list.innerHTML = "";
  Object.keys(tests).forEach(test => {
    const li = document.createElement("li");
    li.textContent = test;
    list.appendChild(li);
  });
});
>>>>>>> 5a24deb5d144256360e1762565ad92f685a3d9de
