import { CameraSubnav } from '@/components/camera/subnav'
import { ProductShell } from '@/components/layout/product-shell'

export default function CameraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProductShell subnav={<CameraSubnav />}>{children}</ProductShell>
}
