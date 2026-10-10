# เพิ่มเนื้อหาเว็บไซต์ Chainuwat

1. บน GitHub เลือก branch master
2. อัปโหลดรูปไป public/images (ชื่ออังกฤษ ไม่มีช่องว่าง)
3. อัปโหลด .md ไป src/content/insights สำหรับบทความ หรือ src/content/work สำหรับผลงาน
4. กด Commit changes แล้วรอ GitHub Actions สำเร็จ

ตัวอย่าง:
```markdown
---
title: "หัวข้อของคุณ"
date: "2026-10-10"
description: "คำอธิบายสั้น ๆ"
lang: "th"
image: "/images/example.jpg"
draft: false
---

## หัวข้อย่อย
เนื้อหาของคุณ
```

image ไม่จำเป็น วันที่ใช้ ค.ศ. lang ใช้ th หรือ en ชื่อไฟล์ใช้ภาษาอังกฤษและขีดกลาง เช่น my-article.md
ไฟล์ draft: true จะไม่ขึ้นหน้ารวมและไม่สร้างหน้าอ่าน ใช้ตัวอย่าง example-draft.md เป็นแม่แบบ
บทความแปลสองภาษาใช้ translationKey เดียวกันในสองไฟล์ ส่วน lang ต่างกัน
ลิงก์หน้าอ่านเช่น /th/insights/my-article/ เปลี่ยนชื่อไฟล์จะเปลี่ยน URL
การลบไฟล์จะลบหน้าใน deployment ถัดไป ประวัติไฟล์ยังอยู่ใน Git
วันที่ภาพงานเป็นวันที่จัดทำโพสต์ ไม่ใช่การยืนยันวันจัดงาน
