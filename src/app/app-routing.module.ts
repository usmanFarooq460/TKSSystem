import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardGuard } from "./accounts/auth-guard.guard";
// import { MainLayoutdesignComponent } from "./shared/main-layoutdesign/main-layoutdesign.component";

const routes: Routes = [
  { path: "", redirectTo: "/admin", pathMatch: "full" },
  {
    path: "Accounts",
    loadChildren: () =>
      import("./accounts/accounts.module").then((m) => m.AccountsModule),
  },
  {
    path: "basic-ui",
    loadChildren: () =>
      import("./basic-ui/basic-ui.module").then((m) => m.BasicUiModule),
    canActivate: [AuthGuardGuard],
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./app-main/admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "teacher",
    loadChildren: () =>
      import("./app-main/teacher/teacher.module").then((m) => m.TeacherModule),
  },
  {
    path: "student",
    loadChildren: () =>
      import("./app-main/student/student.module").then((m) => m.StudentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
