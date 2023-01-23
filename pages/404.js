import Link from "next/link";

export default function NotFoundPage() {
  return (
    <container>
      <h4>Stránka nenalezena</h4>
      <Link href="/">Zpět na úvodní stránku</Link>
    </container>
  );
}
