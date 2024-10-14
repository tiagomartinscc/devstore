import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const featuredProducts = data.products.filter((procuct) => procuct.featured)
  return Response.json(featuredProducts)
}
