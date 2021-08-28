import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('controller-one')
export class ControllerOneController {
    @Get()
    findAll(@Req() request: Request): string {
        return "this a chunk of data from controller-one";
    }

    @Post()
    create(): string {
        return "a chunk of data has been saved by controller-one";
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `controller-one returned data with id ${id}`;
    }

    //or
    @Get(':id')
    findAnotherOne(@Param() params): string {
        return `controller-one got a request with paramaters ${params}`;
    }
}
