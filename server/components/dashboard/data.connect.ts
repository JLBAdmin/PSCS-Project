import { PostgresDataSource } from '../../data-source';
import { Budgets } from '../../entity/pgsql/pg.budget';

export async function budgetAll(code: number) {
  const useSums: any = await PostgresDataSource.getRepository(Budgets)
    .createQueryBuilder('Budgets')
    .select('SUM(Budgets.promotion0_budget_use)', 'sum0')
    .addSelect('SUM(Budgets.promotion1_budget_use)', 'sum1')
    .addSelect('SUM(Budgets.promotion2_budget_use)', 'sum2')
    .addSelect('SUM(Budgets.promotion3_budget_use)', 'sum3')
    .addSelect('SUM(Budgets.promotion4_budget_use)', 'sum4')
    .addSelect('SUM(Budgets.promotion5_budget_use)', 'sum5')
    .addSelect('SUM(Budgets.promotion6_budget_use)', 'sum6')
    .addSelect('SUM(Budgets.promotion7_budget_use)', 'sum7')
    .addSelect('SUM(Budgets.promotion0_ton_contract)', 'sumTon0')
    .addSelect('SUM(Budgets.promotion1_ton_contract)', 'sumTon1')
    .addSelect('SUM(Budgets.promotion2_ton_contract)', 'sumTon2')
    .addSelect('SUM(Budgets.promotion3_ton_contract)', 'sumTon3')
    .addSelect('SUM(Budgets.promotion4_ton_contract)', 'sumTon4')
    .addSelect('SUM(Budgets.promotion5_ton_contract)', 'sumTon5')
    .addSelect('SUM(Budgets.promotion6_baht_ton)', 'sumBahtTon6')
    .addSelect('SUM(Budgets.promotion7_baht_ton)', 'sumBahtTon7')
    .where('Budgets.quota = :id', { id: <number>(<unknown>code) })
    // .andWhere('Budgets.budget_prove = :prove', { prove: '01' })
    // .andWhere('Budgets.request_num < :num', { num: <number>(<unknown>reqs) })
    // .groupBy("user.id")
    // .getRawMany();
    .getRawOne();
  return useSums;
}
