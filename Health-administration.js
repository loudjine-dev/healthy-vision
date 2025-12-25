// دالة التقييم الرئيسية
function evaluateHealth() {
  // أسماء كل الإدخالات (المدخلات في الصفحة)
  const inputs = [
    'fasting', 'afterEating', 'systolic', 'diastolic', 'heartRate', 'cholesterol', 'temperature'
  ];

  let values = {};      // هنا نخزن القيم المدخلة
  let messages = [];    // هنا نجمع الرسائل (النصائح أو التقييم)
  let highestSeverity = 'normal';  // مستوى الخطر العام (عادي، تحذير، خطر)

  // دالة داخلية لتحديث مستوى الخطورة
  function updateSeverity(newSeverity) {
    const levels = { normal: 0, warning: 1, danger: 2 };
    if (levels[newSeverity] > levels[highestSeverity]) {
      highestSeverity = newSeverity;
    }
  }

  // التحقق من القيم المدخلة
  for (const id of inputs) {
    const val = document.getElementById(id).value.trim(); // أخذ القيمة من الـ input
    if (val !== '') {
      let numVal = Number(val);
      if (isNaN(numVal) || numVal <= 0) {
        alert("الرجاء إدخال قيمة صحيحة وموجبة لـ " + id);
        return; // إيقاف الكود إذا القيمة غير صحيحة
      }
      values[id] = numVal; // تخزين القيمة في الكائن
    }
  }

  const resultBox = document.getElementById('result');

  // إذا ما تم إدخال أي قيمة
  if (Object.keys(values).length === 0) {
    resultBox.style.display = 'block';
    resultBox.innerText = "يرجى إدخال قيمة واحدة على الأقل.";
    resultBox.className = 'result warning';
    return;
  }

  // فحص السكر صائم
  if ('fasting' in values) {
    if (values.fasting < 70) { messages.push(" سكر الصيام منخفض جدا"); updateSeverity('danger'); }
    else if (values.fasting <= 99) messages.push(" سكر الصيام طبيعي.");
    else if (values.fasting <= 125) { messages.push(" سكر الصيام مرتفع قليلاً."); updateSeverity('warning'); }
    else { messages.push(" سكر الصيام عالي."); updateSeverity('danger'); }
  }

  // فحص السكر بعد الأكل
  if ('afterEating' in values) {
    if (values.afterEating < 70) { messages.push(" سكر بعد الأكل منخفض."); updateSeverity('danger'); }
    else if (values.afterEating <= 139) messages.push(" سكر بعد الأكل طبيعي.");
    else if (values.afterEating <= 199) { messages.push(" سكر بعد الأكل مرتفع قليلاً."); updateSeverity('warning'); }
    else { messages.push(" سكر بعد الأكل عالي."); updateSeverity('danger'); }
  }

  // فحص ضغط الدم الانقباضي
  if ('systolic' in values) {
    if (values.systolic < 90) { messages.push(" ضغط انقباضي منخفض."); updateSeverity('danger'); }
    else if (values.systolic <= 120) messages.push(" ضغط انقباضي طبيعي.");
    else if (values.systolic <= 139) { messages.push(" ضغط انقباضي مرتفع قليلاً."); updateSeverity('warning'); }
    else { messages.push(" ضغط انقباضي مرتفع."); updateSeverity('danger'); }
  }

  // فحص ضغط الدم الانبساطي
  if ('diastolic' in values) {
    if (values.diastolic < 60) { messages.push(" ضغط انبساطي منخفض."); updateSeverity('danger'); }
    else if (values.diastolic <= 80) messages.push(" ضغط انبساطي طبيعي.");
    else if (values.diastolic <= 89) { messages.push(" ضغط انبساطي مرتفع قليلاً."); updateSeverity('warning'); }
    else { messages.push(" ضغط انبساطي مرتفع."); updateSeverity('danger'); }
  }

  // فحص معدل ضربات القلب
  if ('heartRate' in values) {
    if (values.heartRate < 60) { messages.push(" ضربات القلب بطيئة."); updateSeverity('danger'); }
    else if (values.heartRate <= 100) messages.push(" معدل ضربات القلب طبيعي.");
    else { messages.push("ضربات القلب سريعة جداً."); updateSeverity('danger'); }
  }

  // فحص الكوليسترول
  if ('cholesterol' in values) {
    if (values.cholesterol < 200) messages.push(" الكوليسترول طبيعي.");
    else if (values.cholesterol <= 239) { messages.push(" الكوليسترول مرتفع قليلاً."); updateSeverity('warning'); }
    else { messages.push(" الكوليسترول مرتفع."); updateSeverity('danger'); }
  }

  // فحص درجة الحرارة
  if ('temperature' in values) {
    if (values.temperature < 36) { messages.push(" درجة الحرارة منخفضة."); updateSeverity('danger'); }
    else if (values.temperature <= 37.5) messages.push(" درجة الحرارة طبيعية.");
    else { messages.push(" درجة الحرارة مرتفعة."); updateSeverity('danger'); }
  }

  // عرض النتائج النهائية في الصندوق
  resultBox.innerText = messages.join("\n"); // دمج الرسائل مع فاصل أسطر
  resultBox.style.display = 'block';
  resultBox.className = 'result ' + highestSeverity; // إضافة فئة CSS حسب مستوى الخطورة
}

// تشغيل الدالة عند الضغط على زر "اعرض التقييم"
document.getElementById("evaluateBtn").addEventListener("click", evaluateHealth);
