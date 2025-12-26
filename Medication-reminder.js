<<<<<<< HEAD
// مصفوفة لتخزين الأدوية
const medicines = [];

// دالة إضافة دواء جديد
function addMedicine() {
  const name = document.getElementById("medicine-name").value.trim();
  const time = document.getElementById("medicine-time").value;

  // تحقق من الإدخال
  if (name === "" || time === "") {
    alert("الرجاء إدخال اسم الدواء ووقت التذكير.");
    return;
  }

  // إنشاء عنصر قائمة جديد
  const li = document.createElement("li");
  li.innerHTML = `${name} - ${time} 
    <button class="delete-btn" onclick="deleteMedicine(this)">حذف</button>`;
  document.getElementById("medicines-list").appendChild(li);

  // حفظ الدواء في المصفوفة
  medicines.push({ name, time });

  // تفريغ الحقول
  document.getElementById("medicine-name").value = "";
  document.getElementById("medicine-time").value = "";
}

//  دالة حذف الدواء
function deleteMedicine(button) {
  const li = button.parentElement;
  li.remove();
}

//  فحص الوقت كل دقيقة
setInterval(() => {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5); // hh:mm

  medicines.forEach(med => {
    if (med.time === currentTime) {
      alert(`⏰ حان وقت تناول: ${med.name}`);
    }
  });
}, 60000);
=======
// مصفوفة لتخزين الأدوية
const medicines = [];

// دالة إضافة دواء جديد
function addMedicine() {
  const name = document.getElementById("medicine-name").value.trim();
  const time = document.getElementById("medicine-time").value;

  // تحقق من الإدخال
  if (name === "" || time === "") {
    alert("الرجاء إدخال اسم الدواء ووقت التذكير.");
    return;
  }

  // إنشاء عنصر قائمة جديد
  const li = document.createElement("li");
  li.innerHTML = `${name} - ${time} 
    <button class="delete-btn" onclick="deleteMedicine(this)">حذف</button>`;
  document.getElementById("medicines-list").appendChild(li);

  // حفظ الدواء في المصفوفة
  medicines.push({ name, time });

  // تفريغ الحقول
  document.getElementById("medicine-name").value = "";
  document.getElementById("medicine-time").value = "";
}

//  دالة حذف الدواء
function deleteMedicine(button) {
  const li = button.parentElement;
  li.remove();
}

//  فحص الوقت كل دقيقة
setInterval(() => {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5); // hh:mm

  medicines.forEach(med => {
    if (med.time === currentTime) {
      alert(`⏰ حان وقت تناول: ${med.name}`);
    }
  });
}, 60000);
>>>>>>> 5a24deb5d144256360e1762565ad92f685a3d9de
