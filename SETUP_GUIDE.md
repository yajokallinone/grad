# วิธีแก้ปัญหา PowerShell Execution Policy

## ปัญหา
ไม่สามารถรันคำสั่ง npm หรือ npx ได้เนื่องจาก PowerShell execution policy

## วิธีแก้ไข

### วิธีที่ 1: เปิด PowerShell แบบ Administrator แล้วรันคำสั่ง
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### วิธีที่ 2: ใช้ Command Prompt (CMD) แทน PowerShell
1. เปิด Command Prompt
2. ไปที่โฟลเดอร์โปรเจกต์
```cmd
cd d:\google\cmu-eng-graduate
```
3. รันคำสั่งติดตั้ง
```cmd
npm install
```
4. รันโปรเจกต์
```cmd
npm run dev
```

### วิธีที่ 3: ใช้ Git Bash (ถ้ามีติดตั้ง)
```bash
cd /d/google/cmu-eng-graduate
npm install
npm run dev
```

## หลังจากแก้ปัญหาแล้ว

1. ติดตั้ง dependencies:
```bash
npm install
```

2. รันโปรเจกต์:
```bash
npm run dev
```

3. เปิดเบราว์เซอร์ที่: http://localhost:3000

## หมายเหตุ
- โปรเจกต์นี้ใช้ Next.js 14 กับ Tailwind CSS
- ข้อมูลหลักสูตรทั้งหมดอยู่ในไฟล์ `data/programs.ts`
- สามารถแก้ไขข้อมูลได้ที่ไฟล์ดังกล่าว
