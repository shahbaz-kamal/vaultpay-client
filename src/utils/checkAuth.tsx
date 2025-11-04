import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import type { Trole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const checkAuth = (Component: ComponentType, requiredRoles?: Trole[]) => {
  return function AuthWrapper() {
    const { data: userData, isLoading } = useGetMeQuery(undefined);

    if (!isLoading && !userData?.data?.email) return <Navigate to="/login"></Navigate>;

    if (requiredRoles && !isLoading && !requiredRoles?.includes(userData?.data?.role)) return <Navigate to="/unauthorized"></Navigate>;

    return <Component></Component>;
  };
};
