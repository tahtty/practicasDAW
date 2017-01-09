/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelos;

/**
 *
 * @author Administrador
 */
public class Usuario {
    private String user;
    private String password;
    private String nombre;
    private String correo;

    public Usuario(){
        
    }
    
    public static boolean esValido(String user,String pass){
        if(user.equals("admin")&& pass.equals("password")){
            return true;
        }
        else{
            return false;
        }
    }
    
    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }
    
}
