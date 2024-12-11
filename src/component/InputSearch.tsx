import { useRef } from "react";
interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch = ({ onChange }: Props) => {
  return (
    <div>
      <form>
        {" "}
        <input
         
          style={{
            padding: "10px",
            width: "800px",
            outline: "none",
            border: "none",
            borderRadius: "10px",
          }}
          onChange={onChange}
        
          placeholder="Tìm kiếm danh mục"
        />
      </form>
    </div>
  );
};
