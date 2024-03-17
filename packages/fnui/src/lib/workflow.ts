import { atom, useAtomValue, useSetAtom } from 'jotai'

type Workflow = {
  input: {
    text: string
  }
  steps: WorkflowStep[] // exclude first step (input)
}
type WorkflowStep = {
  text: string
  convert: FlowUIOption
}
const workflowAtom = atom<Workflow>({
  input: {
    text: ''
  },
  steps: [],
})

export const useGetWorkflow = () => useAtomValue(workflowAtom)

export const useSetWorkflowInput = () => {
  const set = useSetAtom(workflowAtom)
  const setter = (text: string) => set((state) => ({ ...state, input: {text} }))
  return setter
}
