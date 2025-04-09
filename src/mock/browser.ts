import { setupWorker } from "msw/browser";
import { handlers } from "@/mock/handlers";

// workerインスタンス生成
export const worker = setupWorker(...handlers);
