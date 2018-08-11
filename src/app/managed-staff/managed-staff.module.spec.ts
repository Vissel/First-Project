import { ManagedStaffModule } from './managed-staff.module';

describe('ManagedStaffModule', () => {
  let managedStaffModule: ManagedStaffModule;

  beforeEach(() => {
    managedStaffModule = new ManagedStaffModule();
  });

  it('should create an instance', () => {
    expect(managedStaffModule).toBeTruthy();
  });
});
