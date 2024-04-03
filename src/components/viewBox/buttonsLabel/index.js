import { ButtonsLablelContainer } from "./buttonsLabelContainer";
import { useDispatch, useSelector } from "react-redux";
import { selectTagsBrowserSelectedTag } from "../../../slice";
import {
  fetchDataTagQuestions,
  fetchDataTagRelated,
  fetchDataTagSynonyms,
} from "../../../getData";

export const ButtonsLabel = () => {
  const dispatch = useDispatch();

  const selectedTag = useSelector(selectTagsBrowserSelectedTag);
  return (
    <>
      <ButtonsLablelContainer
        $firstTitle={"You must choose tag to activate buttons"}
        $secondTitle={
          "Returns the frequently asked questions for the given tag"
        }
        $selectedTag={selectedTag}
        $onClick={() => {
          dispatch(fetchDataTagQuestions(selectedTag));
        }}
        $text={"Frequently Asked Questions"}
      />
      <ButtonsLablelContainer
        $firstTitle={"You must choose tag to activate buttons"}
        $secondTitle={"Returns the tags that are most related to this tag"}
        $selectedTag={selectedTag}
        $onClick={() => {
          dispatch(fetchDataTagRelated(selectedTag));
        }}
        $text={"Related Tags"}
      />
      <ButtonsLablelContainer
        $firstTitle={"You must choose tag to activate buttons"}
        $secondTitle={"Gets all synonyms to tag"}
        $selectedTag={selectedTag}
        $onClick={() => {
          dispatch(fetchDataTagSynonyms(selectedTag));
        }}
        $text={"Synonyms"}
      />
    </>
  );
};
