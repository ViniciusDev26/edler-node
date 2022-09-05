import { RegisterStudentByCsv, RegisterStudentByCsvParams } from "../../domain/features/RegisterStudentByCsv";

export class RegisterStudentByCsvService implements RegisterStudentByCsv {
  async readCsv(buffer: Buffer) {
    
  }

  async execute(params: RegisterStudentByCsvParams) {
    return false
  };
}