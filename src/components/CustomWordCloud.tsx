"use client";
import { useTheme } from "next-themes";
import React from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {};

const data = [
  {
    text: "Hey",
    value: 3,
  },
  {
    text: "hoi",
    value: 5,
  },
  {
    text: "hai",
    value: 10,
  },
  {
    text: "bonzua",
    value: 5,
  },
  {
    text: "damn",
    value: 3,
  },
  {
    text: "shit",
    value: 5,
  },
  {
    text: "oh",
    value: 10,
  },
  {
    text: "wow",
    value: 5,
  },
];

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};

const CustomWordCloud = (props: Props) => {
  const theme = useTheme();
  return (
    <>
      <D3WordCloud
        height={650}
        data={data}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme == "dark" ? "white" : "black"}
      />
    </>
  );
};

export default CustomWordCloud;
