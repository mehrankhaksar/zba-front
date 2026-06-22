export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} زندگی با آیه‌ها
        <br />
        تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
