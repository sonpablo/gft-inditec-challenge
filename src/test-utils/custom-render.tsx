import { render, renderHook, RenderHookResult } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const queryClient = createTestQueryClient();

export function customRender(ui: ReactNode) {
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/']}>{ui}</MemoryRouter>
    </QueryClientProvider>
  );
}
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export const customRenderHook = <TResult,>(
  hook: () => TResult
): RenderHookResult<TResult, unknown> => {
  return renderHook(hook, { wrapper });
};
