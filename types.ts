declare module "tailwindcss/lib/util/flattenColorPalette" {
  import { ColorValue } from "tailwindcss/defaultConfig"

  interface FlattenColorPalette {
    (colors: Record<string, ColorValue>): Record<string, string>
  }

  const flattenColorPalette: FlattenColorPalette

  export default flattenColorPalette
}
