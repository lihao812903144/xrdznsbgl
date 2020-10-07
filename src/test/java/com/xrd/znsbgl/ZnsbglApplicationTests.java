package com.xrd.znsbgl;

import com.xrd.znsbgl.entity.LoginLog;
import com.xrd.znsbgl.entity.Person;
import com.xrd.znsbgl.service.AdminService;
import com.xrd.znsbgl.service.LogService;
import org.apache.catalina.core.ApplicationContext;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.context.annotation.ApplicationScope;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;

@RunWith(SpringRunner.class)
@SpringBootTest
class ZnsbglApplicationTests {

    @Autowired
    LogService logService;
    @Autowired
    AdminService adminService;
    @Autowired
    Person person;

    @Test
    void contextLoads() {

        ArrayList<LoginLog> al = logService.getAllLoginLog();
        for (int i = 0;i<al.size();i++){
            //集合类中的 List.get() 方法用于获取列表指定位置的元素。返回通过索引获取的元素。
            int adminid = al.get(i).getAdminid();
            al.get(i).setAdmin(adminService.getAdminById(adminid));  //用户的所有信息
        }
//        al.get(1).setAdmin(adminService.getAdminById(1));
        System.out.println(al);

    }

    //测试自动装配llo
    @Test
    void contextLoads1() {
        System.out.println(person);

    }
}
