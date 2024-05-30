import React, { Children, useState } from "react";


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CustomButton } from "../button";

function SearchDrawer({className, drawerTitle, children}) {

  return (
    <Drawer className={className}>
      <DrawerTrigger asChild>
        <CustomButton variant="outline" className={`cc-text-black cc-w-full cc-rounded-full !cc-max-w-full ${className}`}>{drawerTitle}</CustomButton>
      </DrawerTrigger>
      <DrawerContent>   
        <div className="cc-mx-auto cc-w-full">
            {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default SearchDrawer;
