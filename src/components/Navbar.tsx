"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div
			className={cn("fixed top-16 inset-x-0 max-w-2xl mx-auto z-50", className)}
		>
			<Menu setActive={setActive}>
				<Link href={"/"}>
					<MenuItem
						active={active}
						setActive={setActive}
						item="Home"
					></MenuItem>
				</Link>
				<MenuItem active={active} setActive={setActive} item="Our Courses">
					<div className="flex flex-col space-y-4 text-sm ">
						<HoveredLink href="/courses">All Courses</HoveredLink>
						<HoveredLink href="/courses">Basic Music Theory</HoveredLink>
						<HoveredLink href="/courses">Advanced Composition</HoveredLink>
						<HoveredLink href="/courses">Songwriting</HoveredLink>
						<HoveredLink href="/courses">Music Production</HoveredLink>
					</div>
				</MenuItem>
                <Link href={"/contact"}>
				<MenuItem active={active} setActive={setActive} item="Contact Us">
					
				</MenuItem>
                </Link>
			</Menu>
		</div>
	);
};

export default Navbar;
