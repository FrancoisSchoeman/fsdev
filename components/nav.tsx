'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const navItems = [
  { href: '/', label: 'home' },
  { href: '/blog', label: 'blog' },
];

export function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <NavigationMenu className="max-w-4xl mx-auto px-0 mt-8 border fixed top-0 left-1/2 -translate-1/2 rounded bg-background z-50">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild className="hover:bg-primary">
              <Link
                href={item.href}
                className={`${navigationMenuTriggerStyle()} ${
                  pathname === item.href ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
