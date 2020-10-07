package com.xrd.znsbgl.service;

import com.xrd.znsbgl.entity.Admin;

import java.util.ArrayList;

public interface AdminService {

    public Admin getAdminByUsername(String username);

    public int addAdmin(Admin admin);

    public ArrayList<Admin> getAllAdmin();

    public Admin getAdminById(Integer id);

    public int updategetAdminById(Admin admin);
}
