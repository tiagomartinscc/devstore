import data from '../data.json'

export async function GET() {
  const featuredProducts = data.products.filter((procuct) => procuct.featured)
  return Response.json(featuredProducts)
}
