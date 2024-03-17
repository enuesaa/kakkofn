import { atom, useAtomValue, useSetAtom } from 'jotai'

type Workflow = {
  input: {
    text: string
  }
  steps: WorkflowStep[] // exclude first step (input)
}
type WorkflowStep = {
  convert: FlowUIOption
  output?: string
}
const workflowAtom = atom<Workflow>({
  input: {
    text: '',
  },
  steps: [
    {
      convert: {
        name: '改行trim',
        type: 'no',
        config: {},
      },
      output: undefined,
    }
  ],
})

export const useGetWorkflow = () => useAtomValue(workflowAtom)

export const useGetWorkflowStep = (position: number): undefined|WorkflowStep => {
  const workflow = useAtomValue(workflowAtom)
  return workflow.steps.length > position ? workflow.steps[position] : undefined
}

export const useSetWorkflowInput = () => {
  const set = useSetAtom(workflowAtom)
  const setter = (text: string) => set((state) => ({ ...state, input: {text} }))
  return setter
}
