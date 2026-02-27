import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee) private employeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeRepository.create(createEmployeeDto);
    return await this.employeRepository.save(employee);
  }

  async findAll() {
    return await this.employeRepository.find();
  }

  async findOne(id: number) {
    const employeeFound = await this.employeRepository.findOneBy({ id });
    if (!employeeFound) {
      throw new NotFoundException('Empleado no encontrado');
    }
    return employeeFound;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const result = await this.employeRepository.update(id, updateEmployeeDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Empleado con id ${id} no existe.`);
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.employeRepository.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Empleado no encontrado');
    }
    return { message: 'Empleado eliminado exitosamente' };
  }
}
