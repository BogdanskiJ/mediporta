import { useDispatch, useSelector } from "react-redux";
import { ButtonBoxContainer } from "./buttonBoxContainer";
import { selectTagsBrowserShowMenu, setShowMenu } from "../../../slice";

export const ButtonBox = () => {
  const dispatch = useDispatch();
  const $showMenu = useSelector(selectTagsBrowserShowMenu);

  const $toggleMenu = () => {
    dispatch(setShowMenu());
  };

  return <ButtonBoxContainer $toggleMenu={$toggleMenu} $showMenu={$showMenu} />;
};
