import Badge from "./components/Badge"
import Button from "./components/Button"
import { ButtonIcon } from "./components/ButtonIcon"
import InputCheckbox from "./components/InputCheckBox"
import Text from "./components/Text"
import { Trash2, Loader } from "lucide-react"


function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text as="button" >Cairo</Text>
      <Trash2 className="fill-pink-base" />
      <span ></span>
      <Loader className="animate-spin" />
      <div>
        <Badge variant="secondary">2</Badge>
      </div>
      <Button>Button</Button>
      <ButtonIcon buttonProps={{ disabled: true, }} name="trash2" variant="secondary" size="sm" svgProps={{ className: "fill-pink-base" }} />
      <div>
        <InputCheckbox />
      </div>
    </div>
  )
}

export default App
