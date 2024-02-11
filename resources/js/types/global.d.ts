import { AxiosInstance } from "axios";
import ziggyRoute from "ziggy-js";

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    var route: typeof ziggyRoute;
}

declare module "@radix-ui/react-dropdown-menu" {
    export interface DropdownMenuContentProps
        extends React.ComponentPropsWithoutRef<"div"> {}
    export interface DropdownMenuTriggerProps
        extends React.ComponentPropsWithoutRef<"div"> {}
    export interface DropdownMenuGroupProps
        extends React.ComponentPropsWithoutRef<"div"> {}
    export interface DropdownMenuRadioGroupProps
        extends React.ComponentPropsWithoutRef<"div"> {}
    export interface DropdownMenuSeparatorProps
        extends React.ComponentPropsWithoutRef<"div"> {}
    export interface DropdownMenuSubTriggerProps
        extends React.ComponentPropsWithoutRef<"div"> {}
    export interface DropdownMenuSubContentProps
        extends React.ComponentPropsWithoutRef<"div"> {}
    export interface DropdownMenuItemProps
        extends React.ComponentPropsWithoutRef<"div"> {}
    export interface DropdownMenuProps
        extends React.ComponentPropsWithoutRef<"div"> {}
    export interface DropwdownMenuCheckboxItemProps
        extends React.ComponentPropsWithoutRef<"div"> {}
    export interface DropdownMenuTriggerProps
        extends React.ComponentPropsWithoutRef<"div"> {}
}
