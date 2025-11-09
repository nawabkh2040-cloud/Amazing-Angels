import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
// search modal removed per design request
import { Link } from 'react-router-dom';
import logo from '@/assets/school-logo.jpg';

export function Header() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Academics', href: '/academics' },
		{ label: 'Facilities', href: '/facilities' },
		{ label: 'Activities', href: '/activities' },
		{ label: 'Admissions', href: '/admissions' },
		{ label: 'Contact', href: '/contact' },
	];

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full border-b backdrop-blur-lg',
				'bg-background/95 supports-[backdrop-filter]:bg-background/80',
			)}
		>
			<nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
				<Link to="/" className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
					<img src={logo} alt="Amazing Angels Public School" className="h-8 w-8 rounded-full object-cover" />
					<p className="font-bold text-sm hidden sm:block">Amazing Angels</p>
				</Link>
				<div className="flex items-center gap-2">
					<div className="hidden items-center gap-1 lg:flex">
						{links.map((link) => (
							<Link
								key={link.href}
								className={buttonVariants({ variant: 'ghost' })}
								to={link.href}
							>
								{link.label}
							</Link>
						))}
					</div>
					{/* Search removed as requested */}
					<Sheet open={open} onOpenChange={setOpen}>
						<Button
							size="icon"
							variant="outline"
							onClick={() => setOpen(!open)}
							className="lg:hidden"
						>
							<MenuIcon className="size-4" />
						</Button>
						<SheetContent
							className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
							side="left"
						>
							<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
								{links.map((link) => (
									<Link
										key={link.href}
										className={buttonVariants({
											variant: 'ghost',
											className: 'justify-start',
										})}
										to={link.href}
										onClick={() => setOpen(false)}
									>
										{link.label}
									</Link>
								))}
							</div>
							<SheetFooter>
								<Link to="/admissions" className="w-full">
									<Button className="w-full">Apply Now</Button>
								</Link>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}

// pages data removed with search modal
