interface IRecipeRequest {
  query?: string | null;
  id?: string | null;
  ingredients?: string[] | null;
  maxResult?: Number | null;
}

export default IRecipeRequest;
