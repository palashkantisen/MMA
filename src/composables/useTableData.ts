import { ref } from 'vue'


export interface IWideTableData {
  name: string
  email: string
  title: string
  title2: string
  status: string
  role: string
}

export function useTableData() {
  const wideTableData = ref<IWideTableData[]>(
    [...Array(10).keys()].map(() => ({
      name: 'John Doe',
      email: 'john@example.com',
      title: 'Software Engineer',
      title2: 'Web dev',
      status: 'Active',
      role: 'Owner',
    })),
  )

  return {
    wideTableData,
  }
}
