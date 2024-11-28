"use client";
import { Box, BoxProps } from "@chakra-ui/react";
import clsx from "clsx";

import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export type NavigationItemProps = {
  title: string;
  href: string;
  navItemProps?: BoxProps;
};

const NavigationItem = ({ title, href, navItemProps }: NavigationItemProps) => {
  const pathname = usePathname();
  const [isActiveRouteItem, setIsActiveRouteItem] = useState(false);

  useEffect(() => {
    setIsActiveRouteItem(href === pathname);
  }, [href, pathname]);

  return (
    <Box
      asChild
      className={clsx(
        styles["menu__item"],
        isActiveRouteItem && styles["menu__item_active"]
      )}
      {...navItemProps}
    >
      <Link href={href}>{title}</Link>
    </Box>
  );
};

export default NavigationItem;
