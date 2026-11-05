import { ProductShell } from '@/components/layout/product-shell'
import { SitacSubnav } from '@/components/sitac/subnav'

export default function SitacLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProductShell subnav={<SitacSubnav />}>{children}</ProductShell>
}
