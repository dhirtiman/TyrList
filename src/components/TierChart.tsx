import { EditableText } from "./EditableText";
import  {useState} from 'react'

export default function TierChart(): JSX.Element {

  const [title,setTitle] = useState("Milk");

  return (
    <div className="flex h-svh w-full flex-col items-center justify-normal bg-gray-800 text-white">
      <EditableText text={title} onChange={setTitle} className="text-2xl font-bold text-black" />
    </div>
  );
} 