# Shared Components Usage Guide

## 1. MedicalDeanSpeechComponent
**Selector:** `ck-dean-speech`

**Inputs:**
- `sectionTitle: string` — عنوان القسم
- `deanInfo: DeanInfo` — بيانات العميد:
  - `name: string`
  - `title: string`
  - `image: string`
  - `message: string` (HTML)
  - `qualifications: string[]`

**Example:**
```html
<ck-dean-speech [sectionTitle]="'كلمة العميد'" [deanInfo]="deanInfo"></ck-dean-speech>
```

---
## 2. DepartmentsComponent
**Selector:** `ck-departments`

**Inputs:**
- `departments: DepartmentItem[]` — الأقسام
- `sectionTitle: string`
- `showTitle: boolean`
- `departmentLinkFn?: (department: DepartmentItem) => any` — دالة راوتينج جينيرك

**Example:**
```html
<ck-departments [departments]="departments" [sectionTitle]="'الأقسام'" [showTitle]="true" [departmentLinkFn]="dep => ['/departments', dep.id]"></ck-departments>
```

---
## 3. MedicineFooterComponent
**Selector:** `ck-medicine-footer`

**Inputs:**
- لا يوجد مدخلات مطلوبة افتراضيًا

**Example:**
```html
<ck-medicine-footer></ck-medicine-footer>
```

---
## 4. MedicineHeroSectionComponent
**Selector:** `ck-medicine-hero-section`

**Inputs:**
- `slides: HeroSlideDto[]`
- `buttonText: string`
- `buttonRoute: string`
- `autoPlayInterval: number`

**Example:**
```html
<ck-medicine-hero-section [slides]="slides"></ck-medicine-hero-section>
```

---
## 5. MedicineLogoBarComponent
**Selector:** `ck-medicine-logo-bar`

**Inputs:**
- `logoData: LogoDto`
- `contactInfo: ContactDto`
- `Address: string`
- `Phone: string`

**Example:**
```html
<ck-medicine-logo-bar [logoData]="logoData" [contactInfo]="contactInfo"></ck-medicine-logo-bar>
```

---
## 6. MedicineMenuBarComponent
**Selector:** `ck-medicine-menu-bar`

**Inputs:**
- `menuTabs: MenuTab[]`

**Example:**
```html
<ck-medicine-menu-bar [menuTabs]="menuTabs"></ck-medicine-menu-bar>
```

---
## 7. MedicineNewsComponent
**Selector:** `ck-medicine-news`

**Inputs:**
- `newsItems: NewsItem[]`
- `sectionTitle: string`
- `sectionSubtitle: string`
- `showTitle: boolean`
- `itemsPerView: number`
- `autoPlay: boolean`
- `autoPlayInterval: number`
- `isRTL: boolean`
- `Continue_Reading: string`
- `readMoreLinkFn?: (item: NewsItem) => any` — دالة راوتينج جينيرك

**Example:**
```html
<ck-medicine-news [newsItems]="news" [readMoreLinkFn]="item => ['/news', item.id]"></ck-medicine-news>
```

---
## 8. ServicesComponent
**Selector:** `ck-services`

**Inputs:**
- `services: ServiceItem[]`
- `sectionTitle: string`
- `showTitle: boolean`
- `showAllServicesButton: boolean`
- `allServicesUrl: string`
- `allServicesText: string`
- `Read_more_btn: string`
- `readMoreLinkFn?: (service: ServiceItem) => any` — دالة راوتينج جينيرك

**Example:**
```html
<ck-services [services]="services" [readMoreLinkFn]="service => ['/services', service.id]"></ck-services>
```

---
## 9. MedicineUpcomingConferenceComponent
**Selector:** `app-medicine-upcoming-conference`

**Inputs:**
- `conference: Conference`
- `btn: string`
- `section_title: string`
- `rout_btn_after_section: string`
- `conferenceLink: any` — لينك جينيرك للراوت
- `allConferencesLink: any` — لينك جينيرك لكل المؤتمرات

**Example:**
```html
<app-medicine-upcoming-conference
  [conference]="conference"
  [conferenceLink]="['/conferences', conference.id]"
  [allConferencesLink]="['/conferences']"
  ...>
</app-medicine-upcoming-conference>
```
