
export interface UserSignInDto {
    readonly userName: string;
    readonly password: string;
}

export interface UserSignUpDto extends UserSignInDto {
    readonly firstName: string;
    readonly surName: string;
    readonly schoolName: string;
}
