import { VueNode } from '@/types/vue-type';

export interface DropdownProps {
  trigger?: 'hover' | 'click';
  title?: string | VueNode;
  onClick?: (e: MouseEvent) => void;
}

export interface DropdownItemProps {
  disabled?: boolean;
}
