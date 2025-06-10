import { FilterStatus } from "@/types/FilterStatus";
import { CircleCheck, CircleDashed } from "lucide-react-native";

type Props = {
  status: FilterStatus
  sizeIcon?: number
}

export function StatusIcon({ status, sizeIcon }: Props) {
  return status === FilterStatus.DONE ? (
    <CircleCheck size={sizeIcon || 18} color="#2C46B1" />
  ) : (    
    <CircleDashed size={18} color="#000000" />
  )
}