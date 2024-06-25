/** @format */

import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param): param is "apple" | "orange" => {
  return param === "apple" || param === "orange";
};
