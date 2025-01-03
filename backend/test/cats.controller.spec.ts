
import prismaSerivce from 'src/prisma/prisma.service';
import notesController from '../src/notes/notes.controler';
import NoteService from '../src/notes/notes.service';
import { Note } from '@prisma/client'

describe('notesController', () => {
    let catsController: notesController;
    let notesService: NoteService;
    let prisma: prismaSerivce

    beforeEach(() => {
        notesService = new NoteService(prisma);
        catsController = new notesController(notesService);
    });

    describe('findAll', () => {
        it('should return an array of cats', async () => {
            const result = [];
            jest.spyOn(notesService, 'findAll').mockImplementation(()=>{lis});

            expect(await catsController.findAll()).toBe(result);
        });
    });
});
