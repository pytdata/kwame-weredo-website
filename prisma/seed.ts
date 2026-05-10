import { PrismaClient, UserRole } from '@prisma/client';
const prisma = new PrismaClient();
async function main(){
 await prisma.user.upsert({where:{email:process.env.ADMIN_SEED_EMAIL||'admin@werekoenterprise.com'},update:{},create:{email:process.env.ADMIN_SEED_EMAIL||'admin@werekoenterprise.com',passwordHash:'CHANGE_ME',name:'Super Admin',role:UserRole.super_admin}});
 const cat=await prisma.category.upsert({where:{slug:'beverages'},update:{},create:{name:'Beverages',slug:'beverages'}});
 const brand=await prisma.brand.upsert({where:{slug:'kwame-select'},update:{},create:{name:'Kwame Select',slug:'kwame-select'}});
 await prisma.product.upsert({where:{slug:'premium-malt'},update:{},create:{name:'Premium Malt',slug:'premium-malt',description:'Refreshing malt beverage',price:4.50,categoryId:cat.id,brandId:brand.id}});
}
main().finally(()=>prisma.$disconnect());
