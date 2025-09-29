# MedicineFooterComponent Usage

**Selector:** `ck-medicine-footer`

## Inputs
- `contactInfo: FooterContactInfo` — بيانات التواصل (شعار، وصف، عنوان، هاتف، بريد)
- `quickLinks: FooterQuickLink[]` — روابط سريعة
- `latestPosts: FooterPost[]` — أحدث المقالات/الأخبار
- `showNewsletter: boolean` — إظهار فورم النشرة البريدية
- `quick_links: string` — عنوان روابط سريعة
- `latest_posts: string` — عنوان أحدث المقالات

## Outputs
- `linkClick: EventEmitter<{type: string, item: any}>` — عند الضغط على أي رابط
- `socialClick: EventEmitter<FooterSocialLink>` — عند الضغط على أيقونة سوشيال
- `newsletterSubmit: EventEmitter<string>` — عند إرسال البريد الإلكتروني

## Example
```html
<ck-medicine-footer
  [contactInfo]="footerContact"
  [quickLinks]="footerLinks"
  [latestPosts]="footerPosts"
  [showNewsletter]="true"
  [quick_links]="'روابط سريعة'"
  [latest_posts]="'آخر الأخبار'"
  (linkClick)="onFooterLinkClick($event)"
  (socialClick)="onFooterSocialClick($event)"
  (newsletterSubmit)="onNewsletterSubmit($event)"
></ck-medicine-footer>
```

## Types
```typescript
export interface FooterContactInfo {
  logoPath: string;
  logoAlt: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export interface FooterQuickLink {
  text: string;
  url: string;
  icon?: string;
}

export interface FooterPost {
  title: string;
  url: string;
  date: string;
}

export interface FooterSocialLink {
  icon: string;
  url: string;
  title: string;
}
```
