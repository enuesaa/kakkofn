import { atom, useAtomValue, useSetAtom } from 'jotai'

type Workflow = {
  input: string
  output: string
}
const workflowAtom = atom<Workflow>({ input: '', output: '' })
export const useGetWorkflow = () => useAtomValue(workflowAtom)
export const useSetWorkflowInput = () => {
  const setStory = useSetAtom(workflowAtom)
  const setter = (input: string) => setStory((state) => ({ ...state, input }))
  return setter
}
export const useSetWorkflowOuput = () => {
  const setStory = useSetAtom(workflowAtom)
  const setter = (output: string) => setStory((state) => ({ ...state, output }))
  return setter
}
